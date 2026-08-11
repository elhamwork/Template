import { Link } from "react-router-dom";
import "./Button.css";

/**
 * Reusable button component.
 * variant: "primary" (solid accent) | "secondary" (outline)
 * Renders a <Link> when `to` is provided, an <a> when `href` is provided,
 * otherwise a <button>.
 */
export default function Button({
  variant = "primary",
  size = "md",
  to,
  href,
  className = "",
  children,
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size}${className ? ` ${className}` : ""}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
