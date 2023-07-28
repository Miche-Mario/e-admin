import Layout from "@/components/layout"
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { useState } from "react"

export default function NewProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const [goToProducts, setGoToProducts] = useState(false);

    const router = useRouter()


    async function createProduct(e) {
        e.preventDefault();
        const data ={ title, description, price}
        await axios.post('/api/products', data)

        setGoToProducts(true)
    }

    if (goToProducts) {
         router.push('/products')
    }

    return (
        <Layout>
            <form onSubmit={createProduct}>
                <h1 className="text-blue-900 mb-2">New Product</h1>
                <label>Product name</label>
                <input
                    type="text"
                    placeholder="product name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Description</label>
                <textarea
                    placeholder="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <label>Price (in FCFA)</label>
                <input
                    type="number"
                    placeholder="0000"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <button
                    className="btn-primary"
                    type="submit"
                >
                    Save
                </button>
            </form>
        </Layout>
    )
}