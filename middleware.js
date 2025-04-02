export default function middleware(request) {
  const url = new URL(request.url);
  
  // If it's an XML request or ends with .xml
  if (url.pathname.endsWith('.xml') || url.pathname === '/') {
    return new Response(null, {
      status: 307,
      headers: {
        'Location': '/',
        'Content-Type': 'text/html; charset=utf-8'
      }
    });
  }
} 