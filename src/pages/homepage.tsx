import Navigation from '@/components/navbar';
import { Button } from 'flowbite-react';

export default function HomePage() {
    return (
        <section>
            {/* Hero Section */}
            <section className="text-center py-20">
                <h1 className="text-5xl font-bold">AceNova DevOps Freelancing Services</h1>
                <p className="mt-4 text-lg text-gray-400">Streamline your infrastructure with expert DevOps solutions.</p>
                <div className="mt-6 flex justify-center">
                    <Button className="mt-6" color="light" pill>
                        Get Started
                    </Button>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 w-full max-w-4xl">
                <h2 className="text-3xl font-semibold text-center">Services</h2>
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-bold">Cloud Infrastructure</h3>
                        <p className="mt-2 text-gray-400">AWS, Azure, and Google Cloud architecture and automation.</p>
                    </div>
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-bold">CI/CD Pipelines</h3>
                        <p className="mt-2 text-gray-400">Automate deployments with robust CI/CD workflows.</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="text-center py-12">
                <h2 className="text-3xl font-semibold">Ready to optimize your workflow?</h2>
                <p className="mt-4 text-lg text-gray-400">Let's build scalable, efficient DevOps solutions.</p>
                <div className="mt-6 flex justify-center">
                    <Button className="mt-6" color="light" pill>
                        Contact Me
                    </Button>
                </div>
            </section>
        </section>
    );
}
