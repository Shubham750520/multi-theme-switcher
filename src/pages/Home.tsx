import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <div className="pt-20">
      <h2 className="text-3xl font-semibold mb-4">Welcome to the Home Page</h2>
      <p className="mb-4">This is a multi-theme app using React + TypeScript.</p>
      <ProductList />
    </div>
  );
}
