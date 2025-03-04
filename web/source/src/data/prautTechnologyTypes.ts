import prautMiniLogo from "../assets/icon-brain.svg"
import externalIcon from "../assets/icon-external.svg"
import internalIcon from "../assets/icon-internal.svg"

export const prautTechnologyTypes = [
    {
        group: "AI od externích firem",
        icon: externalIcon,
        list: [
            {
                title: "ChatGPT od OpenAI",
                link: "https://openai.com/chatgpt/overview/",
                features: {
                    title: "Klíčové funkce:",
                    list: [
                        "Pokročilý jazykový model schopný generovat kvalitní text a odpovídat na široké spektrum dotazů.",
                        "Schopnost analyzovat data a automatizovat procesy v různých oblastech, včetně zákaznické podpory, obsahu a programování.",
                        "Rozsáhlá znalostní báze a neustálé učení se na základě zpětné vazby.",
                        "Možnost přizpůsobení pro specifické úkoly a integrace do firemních systémů.",
                    ]
                }
            },
            {
                title: "Claude od Anthropic",
                link: "https://anthropic.com/news",
                features: {
                    title: "Klíčové funkce:",
                    list: [
                        "Zaměřen na etiku a bezpečnost, ideální pro firmy hledající spolehlivou AI.",
                        "Výborná schopnost pracovat s dlouhým kontextem, což je výhodné pro komplexní analýzy a rozhodování.",
                        "Redukce rizik spojených s generativní AI, minimalizace zkreslených nebo nebezpečných odpovědí.",
                        "Vhodný pro podnikové aplikace vyžadující vysokou přesnost a kontrolu nad výstupy."
                    ]
                }
            }
            , {
                title: "Gemini od Google",
                link: "https://gemini.google/advanced/?hl=cs",
                features: {
                    title: "Klíčové funkce:",
                    list: [
                        "Google Gemini Flash 2.0 optimalizovaný pro rychlost a efektivitu v generování obsahu.",
                        "Multimodalita – dokáže pracovat s textem, obrazem, zvukem a videem současně.",
                        "Silná integrace s Google ekosystémem pro snadné propojení s nástroji jako Google Drive a Workspace.",
                        "Vhodný pro analýzu velkých objemů dat a tvorbu personalizovaného obsahu v reálném čase."
                    ]
                }
            }
        ]
    },
    {
        group: "AI na našem serveru",
        icon: prautMiniLogo,
        list: [
            {
                title: "LLama",
                link: "https://ai.meta.com/blog/large-language-model-llama-meta-ai/",
                features: {
                    title: "Klíčové funkce:",
                    list: [
                        "Open-source jazykový model s vysokou přizpůsobitelností pro vývojáře.",
                        "Efektivní výkon při běhu na lokálních serverech s nižšími náklady oproti cloudovým řešením.",
                        "Možnost nasazení na vlastním hardware pro zvýšenou bezpečnost a kontrolu nad daty.",
                        "Optimalizovaný pro škálování a přizpůsobení různým firemním aplikacím."
                    ]
                }
            },
            {
                title: "Qwen",
                link: "https://x.com/alibaba_qwen",
                features: {
                    title: "Klíčové funkce:",
                    list: [
                        "Pokročilá AI s vylepšeným porozuměním přirozenému jazyku a kontextu.",
                        "Výborná schopnost generování textu pro obsahovou tvorbu a zákaznickou podporu.",
                        "Vysoká efektivita při analýze dat a poskytování relevantních doporučení.",
                        "Rychlá adaptace na různé obory a specializované domény."
                    ]
                }
            },
            {
                title: "Palm 2",
                link: "https://blog.google.com/technology/ai/google-palm-2-ai-large-language-model/",
                features: {
                    title: "Klíčové funkce:",
                    list: [
                        "Nejnovější generace AI modelu od Google s důrazem na multimodalitu.",
                        "Schopnost zpracovávat text, obraz a audio pro komplexní analýzy a interakce.",
                        "Výborná integrace s Google Cloud a dalšími službami pro firemní nasazení.",
                        "Vysoká přesnost a rychlost při generování odpovědí a automatizaci procesů."
                    ]
                }
            }
        ]
    },
    {
        group: "AI na Vašem serveru",
        icon: internalIcon,
        list: [
            {
                title: "Perplexity",
                link: "https://www.perplexity.ai/hub/blog/open-sourcing-r1-1776",
                features: {
                    title: "Klíčové funkce:",
                    list: [
                        "Model plně „bez cenzury“ a schopný zapojit se do širokého spektra citlivých témat jsme připravili rozmanitý.",
                        "Vícejazyčný hodnotící soubor a více než 1000 příkladů, které tato témata komplexně pokrývají.",
                        "Používají lidské anotátory, stejně jako pečlivě navržené LLM soudce, " +
                        "aby změřili pravděpodobnost, že se model vyhne, nebo poskytne příliš čisté odpovědi na dotazy."
                    ]
                }
            },
            {
                title: "Deepseek",
                link: "https://deepseek.ai",
                features: {
                    title: "Klíčové funkce:",
                    list: [
                        "Výkonný open-source jazykový model s optimalizací pro rychlé a přesné odpovědi.",
                        "Schopnost pracovat s velkým množstvím textových dat a generovat souvislý obsah.",
                        "Vhodný pro chatboty, analýzu textu a automatizaci zákaznické podpory.",
                        "Nízké nároky na výpočetní výkon při zachování vysoké přesnosti odpovědí."
                    ]
                }
            },
            {
                title: "Mistral",
                link: "https://mistral.ai",
                features: {
                    title: "Klíčové funkce:",
                    list: [
                        "Pokročilý jazykový model schopný generovat kvalitní text a odpovídat na široké spektrum dotazů.",
                        "Schopnost analyzovat data a automatizovat procesy v různých oblastech, včetně zákaznické podpory, obsahu a programování.",
                        "Rozsáhlá znalostní báze a neustálé učení se na základě zpětné vazby.",
                        "Možnost přizpůsobení pro specifické úkoly a integrace do firemních systémů.",
                    ]
                }
            }
        ]
    }
]
