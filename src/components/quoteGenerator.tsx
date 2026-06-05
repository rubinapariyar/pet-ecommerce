import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { quotes } from "@/lib/data/quote";
import { Badge, Eye } from "lucide-react";

function QuoteGenerator() {
  const [quote, setQuote] = useState(quotes[0]);
  const [count, setCount] = useState(0);
  const [quoteNumber, setQuoteNumber] = useState(0);

  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
    setCount(count + 1);
  };

  const serialQuote = () => {
    const nextIndex = (count + 1) % quotes.length;
    setQuote(quotes[nextIndex]);
    setCount(count + 1);
  };

  const goToQuote = () => {
    if (quoteNumber >= 0 && quoteNumber < quotes.length) {
      setQuote(quotes[quoteNumber -1]);
    } else {
      alert("please enter the number greater than 0 and less than " + quotes.length);
    }
  };



  useEffect(() => {
    const document = window.document;
    document.title = `Quote viewer - ${count} quotes viewed`;
  }, [count]);

  return (
    <div className="max-w-2xl mx-auto">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-center underline">
          {" "}
          Quote Generator
        </h2>
        <div className="border rounded-2xl p-6 mb-4 flex flex-col items-center justify-center">
          <p className="text-xl font-semibold italic text-center max-w-md mx-auto mb-4">
            {quote}
          </p>

          <div className="bg-secondary p-1 rounded-full text-sm text-center flex items-center gap-1">
            <Eye className="w-4 h-4" />{" "}
            <span className="text-sm">Quote {count + 1}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <input
            onChange={(e) => {
              setQuoteNumber(Number(e.target.value));
            }}
            type="number"
            className="w-full p-1 border rounded-md mb-4 text-center"
          />
          <Button 
          onClick={goToQuote}
          className="px-2 py-auto">Go</Button>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          <Button
            onClick={randomQuote}
            className="flex items-center rounded-full px-6 py-4"
          >
            Random
          </Button>

          <Button
            onClick={serialQuote}
            className="flex items-center rounded-full px-6 py-4"
          >
            Serial
          </Button>
        </div>
      </div>
    </div>
  );
}

export default QuoteGenerator;
