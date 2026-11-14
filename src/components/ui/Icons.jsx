const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  focusable: "false",
};

export function ArrowRight(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M3.5 12h16.5M14 5.5l6.5 6.5L14 18.5" />
    </svg>
  );
}

export function ArrowUp(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 20V4M5.5 10.5 12 4l6.5 6.5" />
    </svg>
  );
}

export function ArrowUpRight(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M7 17 17 7M8.5 7H17v8.5" />
    </svg>
  );
}

export function Check(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function ChevronDown(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function Sun(props) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M4.4 4.4l1.4 1.4M18.2 18.2l1.4 1.4M2.5 12h2M19.5 12h2M4.4 19.6l1.4-1.4M18.2 5.8l1.4-1.4" />
    </svg>
  );
}

export function Moon(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
    </svg>
  );
}

export function Menu(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Heart(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M20.4 5.6a5.2 5.2 0 0 0-7.4 0L12 6.6l-1-1a5.2 5.2 0 0 0-7.4 7.4l1 1L12 21l7.4-7 1-1a5.2 5.2 0 0 0 0-7.4Z" />
    </svg>
  );
}

export function Users(props) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 5.2a3 3 0 0 1 0 5.6M17.5 20a5.2 5.2 0 0 0-2-4.1" />
    </svg>
  );
}

export function Leaf(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M4 20C4 11 9 4.5 20 4c.5 10.5-5.5 15.5-13 15.5" />
      <path d="M4.5 19.5C8 15 12 12.5 16.5 11" />
    </svg>
  );
}

export function Sparkle(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 3c.6 4.6 2.4 6.4 7 7-4.6.6-6.4 2.4-7 7-.6-4.6-2.4-6.4-7-7 4.6-.6 6.4-2.4 7-7Z" />
      <path d="M19 16.5c.3 2 1 2.7 3 3-2 .3-2.7 1-3 3-.3-2-1-2.7-3-3 2-.3 2.7-1 3-3Z" />
    </svg>
  );
}

export function Mail(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4.5 7.5 6.4 5a2 2 0 0 0 2.2 0l6.4-5" />
    </svg>
  );
}

export function MapPin(props) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function Clock(props) {
  return (
    <svg {...iconProps} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function Instagram(props) {
  return (
    <svg {...iconProps} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Star(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12 2.7l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5L2.6 9.5l6.5-.9L12 2.7Z" />
    </svg>
  );
}

export function Play(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M8 5.5v13a1 1 0 0 0 1.5.9l10-6.5a1 1 0 0 0 0-1.7l-10-6.5A1 1 0 0 0 8 5.5Z" />
    </svg>
  );
}
