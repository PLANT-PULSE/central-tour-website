import { NextResponse } from 'next/server';
import twilio from 'twilio';

// Twilio configuration - using environment variables
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_WHATSAPP_FROM = process.env.TWILIO_WHATSAPP_FROM || '+14155238886';
const TWILIO_SMS_FROM = process.env.TWILIO_SMS_FROM || '+14155238886';

// Admin phone numbers (where you receive notifications) - from environment
const ADMIN_WHATSAPP = process.env.TO_WHATSAPP_NUMBER ? `whatsapp:${process.env.TO_WHATSAPP_NUMBER}` : 'whatsapp:+233552327706';
const ADMIN_SMS = process.env.TO_WHATSAPP_NUMBER || '+233552327706';

/**
 * Send WhatsApp message via Twilio
 */
async function sendWhatsAppMessage(to: string, body: string): Promise<{ success: boolean; error?: string }> {
  try {
    const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
    
    await client.messages.create({
      body,
      from: `whatsapp:${TWILIO_WHATSAPP_FROM}`,
      to,
    });
    
    console.log('✅ WhatsApp message sent successfully');
    return { success: true };
  } catch (error: any) {
    console.error('❌ Error sending WhatsApp message:', error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Send SMS message via Twilio
 */
async function sendSmsMessage(to: string, body: string): Promise<{ success: boolean; error?: string }> {
  try {
    const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
    
    await client.messages.create({
      body,
      from: TWILIO_SMS_FROM,
      to,
    });
    
    console.log('✅ SMS sent successfully');
    return { success: true };
  } catch (error: any) {
    console.error('❌ Error sending SMS:', error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Format phone number for SMS (handle WhatsApp format)
 */
function formatPhoneForSms(phone: string): string {
  // Remove 'whatsapp:' prefix if present
  let formatted = phone.replace(/^whatsapp:/, '').trim();
  
  // Remove any spaces or special characters except +
  formatted = formatted.replace(/[\s\-()]/g, '');
  
  // If it starts with +233 (Ghana), keep it as is for international format
  if (formatted.startsWith('+233')) {
    return formatted;
  }
  
  // If it starts with 0 (local Ghana number), convert to +233
  if (formatted.startsWith('0')) {
    return '+233' + formatted.substring(1);
  }
  
  // If it's just the digits without prefix, assume Ghana number
  if (/^\d{9}$/.test(formatted)) {
    return '+233' + formatted;
  }
  
  return formatted;
}

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();
    const { 
      bookingType,
      customerName, 
      customerEmail, 
      customerPhone, 
      travelDate,
      numberOfPeople,
      packageName,
      destinationName,
      festivalName,
      specialRequests 
    } = body;

    console.log('📬 Received booking form submission:', { bookingType, customerName, customerEmail });

    // Validate required fields
    if (!customerName || !customerEmail || !customerPhone) {
      console.warn('⚠️ Missing required fields');
      return NextResponse.json(
        { success: false, error: 'Missing required fields: name, email, and phone are required' },
        { status: 400 }
      );
    }

    // Build the booking details based on booking type
    let bookingDetails = '';
    
    if (bookingType === 'package') {
      bookingDetails = `📦 Booking Type: Tour Package\n🎯 Package: ${packageName || 'Not selected'}`;
    } else if (bookingType === 'destination') {
      bookingDetails = `📍 Booking Type: Destination Visit\n🎯 Destination: ${destinationName || 'Not selected'}`;
    } else if (bookingType === 'transport') {
      bookingDetails = `🎉 Booking Type: Festival Visit\n🎯 Festival: ${festivalName || 'Not selected'}`;
    }

    // Prepare admin notification messages with "Contact Information" heading
    const adminWhatsappMessage = `🔔 New Booking Notification:

📋 Contact Information
━━━━━━━━━━━━━━━━━━━━━━
👤 Name: ${customerName}
📧 Email: ${customerEmail}
📱 Phone: ${customerPhone}

${bookingDetails}

📅 Travel Date: ${travelDate || 'Not specified'}
👥 Number of People: ${numberOfPeople || '1'}
💬 Special Requests: ${specialRequests || 'None'}`;

    const adminSmsMessage = `🔔 New Booking Notification:

📋 Contact Information
Name: ${customerName}
Email: ${customerEmail}
Phone: ${customerPhone}

${bookingDetails}
Travel Date: ${travelDate || 'Not specified'}
Number of People: ${numberOfPeople || '1'}
Special Requests: ${specialRequests || 'None'}`;

    // Initialize results tracking
    const results = {
      adminWhatsapp: false,
      adminSms: false,
    };

    // 1. Send WhatsApp notification to admin
    console.log('📱 Sending WhatsApp to admin...');
    const whatsappResult = await sendWhatsAppMessage(ADMIN_WHATSAPP, adminWhatsappMessage);
    results.adminWhatsapp = whatsappResult.success;

    // 2. Send SMS notification to admin
    console.log('📨 Sending SMS to admin...');
    const adminSmsResult = await sendSmsMessage(ADMIN_SMS, adminSmsMessage);
    results.adminSms = adminSmsResult.success;

    // Check if at least admin notifications were sent successfully
    if (results.adminWhatsapp || results.adminSms) {
      console.log('✅ Booking form processed successfully:', results);
      return NextResponse.json({
        success: true,
        message: 'Booking submitted successfully',
        results,
      });
    } else {
      // Both admin notifications failed
      console.error('❌ Failed to send admin notifications:', results);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to send notifications to admin',
          results,
        },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error('❌ Error processing booking form:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to process booking form' },
      { status: 500 }
    );
  }
}
