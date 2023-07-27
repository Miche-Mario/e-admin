import Layout from "@/components/layout"
import { useState } from "react"

export default function NewProduct() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    function createProduct() {
        
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
                onChange={e => setTitle(e.target.value)}
            />

            <label>Description</label>
            <textarea 
                placeholder="description" 
                value={description}
                onChange={e => setDescription(e.target.value)}
            ></textarea>

            <label>Price (in FCFA)</label>
            <input  
                type="number"  
                placeholder="0000"
                value={price}
                onChange={e => setPrice(e.target.value)}
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