export default function Footer() {
  return (
    <footer className="py-14 bg-white border-t border-gray-100" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="text-gray-900 font-medium">Swiftmark</div>
          <nav className="flex flex-wrap gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Contact</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">About</a>
            <a href="#" className="hover:text-gray-900">Talk to us</a>
          </nav>
        </div>
        <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Swiftmark. All rights reserved.</div>
      </div>
    </footer>
  );
}
