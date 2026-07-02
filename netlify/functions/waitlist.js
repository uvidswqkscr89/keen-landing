exports.handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*', // Allow requests from any origin
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle OPTIONS request for CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify({ message: 'CORS preflight successful' })
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: headers,
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  const { email } = JSON.parse(event.body);

  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    return {
      statusCode: 400,
      headers: headers,
      body: JSON.stringify({ message: 'Valid email is required.' })
    };
  }

  try {
    // In a real application, you would save the email to a database or send it to a service
    console.log(`Received waitlist request for email: ${email}`);

    return {
      statusCode: 200,
      headers: headers,
      body: JSON.stringify({ message: 'Successfully added to waitlist!', email: email })
    };
  } catch (error) {
    console.error('Waitlist function error:', error);
    return {
      statusCode: 500,
      headers: headers,
      body: JSON.stringify({ message: 'Failed to add to waitlist.', error: error.message })
    };
  }
};