import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '../../(components)/EmailTemplate';
import { Resend } from 'resend';


console.log(process.env.RESEND_API_KEY)
const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST (req: NextRequest, res: NextResponse)  {
    const emailTo = process.env.RESEND_RECEIVER_EMAIL;
  const postData = await req.json();
  const { data, error } = await resend.emails.send({
    from: `${postData.name} <${postData.email}>`,
    to: [`${emailTo}`],
    subject: 'Contact from Portfolio Website',
    react: EmailTemplate({ firstName: `${postData.name}`, message: `${postData.message}` }),
  });
  if (error) {
    
    return NextResponse.json(error, {status:400})
  }

  return NextResponse.json(data, {status:200})
};
