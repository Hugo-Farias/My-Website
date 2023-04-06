import { useEffect, useState } from "react";

const useImage = function (fileName: string, fileExt: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [path, setPath] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(
          `../assets/images/${fileName}.${fileExt}`
        );
        setPath(response.default);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [fileName]);

  return {
    loading,
    error,
    path,
  };
};

export default useImage;
