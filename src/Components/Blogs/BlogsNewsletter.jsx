export default function BlogsNewsletter() {
  return (
    <section className="pb-12 px-6 sm:px-8 lg:px-10 bg-white">
      <div className="max-w-7xl mx-auto rounded-2xl border border-gray-100 bg-[#fafafa] p-8 sm:p-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Receive weekly editorial digests, exam alerts, and exclusive strategy
          sessions directly in your inbox.
        </p>
        <form className="mt-7 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#DC3545]"
          />
          <button
            type="submit"
            className="rounded-lg bg-[#DC3545] px-6 py-3 text-white font-semibold hover:bg-[#c82333] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
