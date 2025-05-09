import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  id?: string; // Added id prop for anchoring
  title: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionTitle({
  id,
  title,
  description,
  icon: Icon,
  className,
  titleClassName,
  descriptionClassName
}: SectionTitleProps) {
  return (
    <div id={id} className={cn("mb-8 md:mb-12 text-center", className)}>
      <div className="flex items-center justify-center mb-2">
        {Icon && <Icon className="mr-3 h-8 w-8 md:h-10 md:w-10 text-primary" />}
        <h1 className={cn(
            "text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl",
             titleClassName
          )}>
          {title}
        </h1>
      </div>
      {description && (
        <p className={cn("mt-2 text-lg text-muted-foreground max-w-2xl mx-auto", descriptionClassName)}>
          {description}
        </p>
      )}
    </div>
  );
}
