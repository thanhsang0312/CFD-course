import axiosInstance from "../utils/axiosInstance";

export const blogService = {
    getListBlogs(query = "") {
        return axiosInstance.get(`/blogs${query}`);
    },
    getBlogBySlug(slug = "") {
        return axiosInstance.get(`/blogs/${slug}`);
    },
    getBlogCategories(query = "") {
        return axiosInstance.get(`/blog-categories${query}`);
    }
}