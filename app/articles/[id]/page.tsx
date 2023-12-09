import Layout from "../../components/Layouts/Layout";
import { articles } from "./entry";

export default function Article({ params }: { params: { id: string } }) {

    const result = articles.find(c => c.slug === params.id);

    if (!result) {
        return <div className="w-screen h-screen flex justify-center items-center">
            <h2>Not Found!! 地球上のどこにも見当たりません</h2>
        </div>
    }

	return (
		<Layout>
            {result.slug}
		</Layout>
	);
}
