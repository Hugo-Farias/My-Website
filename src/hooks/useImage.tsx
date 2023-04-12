import { useEffect, useState } from "react";

const useImage = function (filePath: string, fileExt?: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [path, setPath] = useState(null);

  // console.log(`${filePath}.${fileExt}`);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`${filePath}.${fileExt}`);
        setPath(response.default);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [filePath]);

  return {
    loading,
    error,
    path,
  };
};

export default useImage;
