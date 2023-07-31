import Layout from "@/components/layout"
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { useState } from "react"

export default function ProductForm({
    _id,
    title: existingTitle,
    description: existingDescription,
    price: existingPrice,
    images
}) {
    const [title, setTitle] = useState(existingTitle || '');
    const [description, setDescription] = useState(existingDescription || '');
    const [price, setPrice] = useState(existingPrice || '');
    const [goToProducts, setGoToProducts] = useState(false);

    const router = useRouter()


    async function saveProduct(e) {
        e.preventDefault();
        const data = { title, description, price }

        if (_id) {
            //update
            await axios.put('/api/products', { ...data, _id });

        } else {
            //create
            await axios.post('/api/products', data)
        }
        setGoToProducts(true)

    }

    if (goToProducts) {
        router.push('/products')
    }

    async function uploadImages(e) {
        const files = e.target?.files;
        if(files?.length > 0) {
            const data = new FormData();

            for(const file of files) {
                data.append('file', file)
            }

            const res = await fetch('/api/upload', {
             method: 'POST',
             body: data}
            );

            console.log(res.length);
        }
    }

    return (
        <>
            <form onSubmit={saveProduct}>
                <label>Product name</label>
                <input
                    type="text"
                    placeholder="product name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>
                
                    Photos
                </label>
                <div className="mb-2">
                    <label className="w-24 h-24 text-sm gap-1 cursor-pointer text-center text-gray-500 flex items-center justify-center rounded-lg bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                        <div>
                            Upload
                        </div>
                        <input
                            className="hidden"
                            type="file"
                            onChange={uploadImages}
                        />
                    </label>
                    {
                        !images?.length && (
                            <div>No photos in this product</div>
                        )
                    }
                </div>

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
        </>
    )
}