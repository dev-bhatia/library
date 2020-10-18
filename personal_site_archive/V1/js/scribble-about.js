import { annotate } from "https://unpkg.com/rough-notation?module";
        const n1 = document.querySelector("#a1");
        const n2 = document.querySelector("#a2");

        const a1 = annotate(n1, { type: "underline", color: "orange" });
        const a2 = annotate(n2, { type: "box", color: "blue" });

        var delayInMilliseconds = 500; //1 second

        function hello(dispaly_element) {
            setTimeout(function() {
            dispaly_element.show();
            }, delayInMilliseconds);
        }

        hello(a1);
        hello(a2);