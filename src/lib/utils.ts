// Utility to concat classes in a safe manner (similaro to clsx / cn)
export function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}
