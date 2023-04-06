import { useEffect, useState } from "react";

interface PropsT {
  src: string;
  alt: string;
  className?: string;
}

const AsyncImg = function (props: PropsT) {
  const { src, alt, className } = props;

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async function (path: string): Promise<string> {
      const res = await import(`${path}`);
      return res.default;
    };

    console.log(src);
    console.log(imageUrl);

    loadImage(src).then((url) => setImageUrl(url));
  }, [src]);

  // console.log(imageUrl);

  if (!imageUrl) return null;

  return <img src={imageUrl} alt={alt} className={className} />;
};

export default AsyncImg;
