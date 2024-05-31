import { useEffect, useState } from "react";

export default function useUserToken() {
  const [userToken, setUserToken] = useState(
    document.cookie.match(/token=([^;]+)/)?.[1],
  );

  useEffect(() => {
    setUserToken(document.cookie.match(/token=([^;]+)/)?.[1]);
  });

  return { userToken };
}
