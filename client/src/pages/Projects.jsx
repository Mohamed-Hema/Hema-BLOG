import CallToAction from "../components/CallToAction";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500">
        Have a look on my Github Profile to see all of the projects that
        I&apos;ve done or currently working on 😎
      </p>
      <CallToAction />
    </div>
  );
}
