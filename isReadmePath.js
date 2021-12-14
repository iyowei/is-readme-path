import { basename } from "path";

export default function isReadmePath(path = "") {
  return basename(path).toLowerCase() === "readme.md";
}
