export default (value) => {
    return value?.trim()
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/[\,\.\:\?\!\½\)\(]/g, '');
};
