import Layout from "@/components/layout";
import Link from "next/link";

export default function Products() {
    return (
        <Layout>
            <Link 
                href={'/products/new'}
                className="bg-blue-900 rounded text-white py-1 px-2"
            >
                Add new product
            </Link>
        </Layout>
    )
}