export const ProductService = {
    async getProductsData(search: string): Promise<Page> {
        try {
            const response = await fetch('http://127.0.0.1:8090/anime?search=' + search);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return {} as Page;
        }
    }
};