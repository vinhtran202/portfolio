export default function Footer() {
  return (
    <section className="py-2 clear-both font mt-10">
      <div className="mx-auto px-4 w-full max-w-5xl text-center font-mono">
        <div className="text-center  font-normal text-xl text-black mb-10">
          <p>Copyright &copy; 2021. All Rights Reserved.</p>
          <p>
            Powered by{" "}
            <a href="https://www.reactjs.org/" className="text-[#ff9000]">
              React
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
