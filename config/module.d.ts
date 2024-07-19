declare module "*.bmp" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.ico" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  import type React from "react";

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: string;

  export { ReactComponent };
  export default content;
}

declare module "*.bmp?inline" {
  const src: string;
  export default src;
}

declare module "*.gif?inline" {
  const src: string;
  export default src;
}

declare module "*.jpg?inline" {
  const src: string;
  export default src;
}

declare module "*.jpeg?inline" {
  const src: string;
  export default src;
}

declare module "*.png?inline" {
  const src: string;
  export default src;
}

declare module "*.ico?inline" {
  const src: string;
  export default src;
}

declare module "*.webp?inline" {
  const src: string;
  export default src;
}

declare module "*.svg?inline" {
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module "*.bmp?url" {
  const src: string;
  export default src;
}

declare module "*.gif?url" {
  const src: string;
  export default src;
}

declare module "*.jpg?url" {
  const src: string;
  export default src;
}

declare module "*.jpeg?url" {
  const src: string;
  export default src;
}

declare module "*.png?url" {
  const src: string;
  export default src;
}

declare module "*.ico?url" {
  const src: string;
  export default src;
}

declare module "*.webp?url" {
  const src: string;
  export default src;
}

declare module "*.svg?url" {
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module "*.css" {
  const classes: Readonly<Record<string, string>>;
  export default classes;
}

declare module "*.scss" {
  const classes: Readonly<Record<string, string>>;
  export default classes;
}

declare module "*.less" {
  const classes: Readonly<Record<string, string>>;
  export default classes;
}

declare module "*.styl" {
  const classes: Readonly<Record<string, string>>;
  export default classes;
}

declare module "*.sass" {
  const classes: Readonly<Record<string, string>>;
  export default classes;
}

declare module "*.module.css" {
  const classes: Readonly<Record<string, string>>;
  export default classes;
}

declare module "*.module.scss" {
  const classes: Readonly<Record<string, string>>;
  export default classes;
}

declare module "*.module.less" {
  const classes: Readonly<Record<string, string>>;
  export default classes;
}

declare module "*.module.styl" {
  const classes: Readonly<Record<string, string>>;
  export default classes;
}

declare module "*.module.sass" {
  const classes: Readonly<Record<string, string>>;
  export default classes;
}

declare module "*.md" {
  const src: string;
  export default src;
}

declare module "*.hbs" {
  const src: string;
  export default src;
}

declare module "*.yaml" {
  const src: string;
  export default src;
}

declare module "*.toml" {
  const src: string;
  export default src;
}

declare module "*.xml" {
  const src: string;
  export default src;
}
