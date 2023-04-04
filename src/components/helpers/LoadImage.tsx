export async function loadImageAsync(path: string): Promise<HTMLImageElement> {
  const img = new Image();
  const module = await import(path);
  img.src = module.default;
  return new Promise((resolve) => {
    img.onload = () => {
      resolve(img);
    };
  });
}
