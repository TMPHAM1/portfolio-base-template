import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,message
}) => (
  <div>
    <h1>{firstName} has sent you an email!</h1>
    <p>This is their message: {message}</p>
  </div>
);
