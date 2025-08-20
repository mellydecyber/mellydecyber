import { ReactNode } from 'react';

interface Props {
  title: string;
  type?: 'info' | 'success' | 'error';
  children: ReactNode;
}

const colors: Record<string, string> = {
  info: 'border-blue-500',
  success: 'border-green-500',
  error: 'border-red-500'
};

export default function Callout({ title, type = 'info', children }: Props) {
  return (
    <div className={`border-l-4 p-4 my-4 ${colors[type]}`}>
      <strong>{title}</strong>
      <div>{children}</div>
    </div>
  );
}
