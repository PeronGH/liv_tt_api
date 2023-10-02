export async function sha256(input: string) {
  const bytes = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", bytes);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function getTimestamp() {
  return Math.floor(Date.now() / 1000);
}

export async function getAuthorization(
  username: string,
  timestamp: number | string,
) {
  const hashKey = "tTb1s#(:!Lp0l~(WS*<8";
  const hash1 = await sha256(`${username}.${timestamp}.${hashKey}`);
  const hash2 = await sha256(`${hash1}.${hashKey}`);
  return hash2;
}
