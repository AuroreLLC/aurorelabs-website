import Section from "@/components/Section";
import { data } from "@/content/intelligent-automation";

const IntelligentAutomation = () => (
  <div className="container mx-auto">
      <main className="p-8">
          <h1 className="text-2xl font-bold">Intelligent Automation</h1>
          <div>
            {data.map((section) => (
              <Section
                key={section.id}
                title={section.title}
                description={section.description}
                buttonText={section.buttonText}
              />
            ))}
          </div>
      </main>
  </div>
);

export default IntelligentAutomation;