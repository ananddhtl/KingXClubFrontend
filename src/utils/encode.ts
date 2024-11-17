export const encodeUserId = (id: string): string => {
    return btoa(id); // Base64 encoding, use a more secure encoding if needed
};
