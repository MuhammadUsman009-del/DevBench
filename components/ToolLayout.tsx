'use client';

interface ToolLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export default function ToolLayout({ title, description, children }: ToolLayoutProps) {
  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-accent mb-2">{title}</h1>
          {description && <p className="text-muted text-lg">{description}</p>}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">{children}</div>
      </div>
    </div>
  );
}
