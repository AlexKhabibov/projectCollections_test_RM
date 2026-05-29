export function getImageSrc(src?: string | null) {
    if (!src) return "/default-image.jpg";

    if (typeof src !== "string") return "/default-image.jpg";

    const trimmed = src.trim();

    if (!trimmed) return "/default-image.jpg";

    if (!trimmed.startsWith("http") && !trimmed.startsWith("/")) {
        return "/default-image.jpg";
    }

    return trimmed;
}