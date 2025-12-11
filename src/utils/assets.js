export const getAssetPath = (path) => {
    const basePath = process.env.BASE_PATH || '';
    if (path.startsWith('http')) return path; // Ignore external URLs
    // Avoid double slash if path starts with / and basePath ends with / (though basePath usually doesn't)
    // Standardize: ensure path starts with /
    const safePath = path.startsWith('/') ? path : `/${path}`;
    return `${basePath}${safePath}`;
};
