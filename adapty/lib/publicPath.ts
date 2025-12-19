const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/$/, "");

export function withBasePath(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  if (!basePath) return p;
  if (p === basePath || p.startsWith(`${basePath}/`)) return p;
  return `${basePath}${p}`;
}
