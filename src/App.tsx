/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  PlayCircle, 
  Volume2, 
  Star, 
  Users, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp,
  Clock,
  BookOpen,
  Zap,
  Heart,
  School,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-orange-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left hover:text-orange-600 transition-colors"
      >
        <span className="font-semibold text-gray-800">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  React.useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5] font-sans text-gray-900 selection:bg-orange-200">
      {/* Top Banner */}
      <div className="bg-orange-600 text-white py-2 text-center text-sm font-bold tracking-wide">
        <motion.p
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🔥 Desconto exclusivo expira em: <span className="font-mono bg-white/20 px-2 py-0.5 rounded ml-1">{formatTime(timeLeft)}</span>
        </motion.p>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              150 Dinâmicas Prontas Para <span className="text-orange-600">Educação Especial</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Atividades lúdicas, educativas e prontas para aplicar — diversão e aprendizado em cada atividade.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button className="w-full sm:w-auto bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-200 transform hover:-translate-y-1">
                Quero Acessar Agora
              </button>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-orange-100 rounded-full blur-3xl -z-10 opacity-50" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-100 rounded-full blur-3xl -z-10 opacity-50" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">🎯 Por que escolher nossas dinâmicas?</h2>
            <div className="w-20 h-1.5 bg-orange-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-orange-600" />,
                title: "Criadas especialmente para professores e pais",
                desc: "Material desenvolvido por educadores experientes."
              },
              {
                icon: <CheckCircle2 className="w-8 h-8 text-orange-600" />,
                title: "Atividades testadas em sala com resultados incríveis",
                desc: "Aplicadas e validadas em ambientes reais."
              },
              {
                icon: <Zap className="w-8 h-8 text-orange-600" />,
                title: "Aprendizado natural e divertido",
                desc: "Crianças aprendem brincando."
              },
              {
                icon: <Clock className="w-8 h-8 text-orange-600" />,
                title: "Economize horas de planejamento",
                desc: "É só imprimir e aplicar."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-[#FFFBF5] border border-orange-50 text-center"
              >
                <div className="mb-6 flex justify-center">{item.icon}</div>
                <h3 className="font-bold text-lg mb-3 leading-snug">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Highlight Section */}
      <section className="py-20 bg-orange-600 text-white px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-8">
            📚 Dinâmicas Especiais Para Educação Especial
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Um acervo completo com tudo o que você precisa para transformar suas aulas em momentos inesquecíveis.
          </p>
          <button className="bg-white text-orange-600 px-12 py-5 rounded-full font-black text-xl hover:bg-orange-50 transition-all shadow-2xl transform hover:scale-105">
            QUERO ACESSAR AGORA
          </button>
        </div>
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full -mr-32 -mt-32 opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-700 rounded-full -ml-32 -mb-32 opacity-50" />
      </section>

      {/* Testimonials & Metrics */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">⭐ O que dizem quem já usa</h2>
            <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-gray-600 font-semibold">4.9/5 - 2.500+ avaliações</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                name: "Profª Carla",
                role: "Professora de Educação Especial",
                img: "https://picsum.photos/seed/carla/100/100",
                text: "As dinâmicas mudaram minha rotina. As crianças ficam super engajadas e eu economizo muito tempo de planejamento!"
              },
              {
                name: "Profª Daniela",
                role: "Educadora há 8 anos",
                img: "https://picsum.photos/seed/daniela/100/100",
                text: "Material de altíssima qualidade. Dá pra ver que foi feito por quem entende do chão da escola."
              },
              {
                name: "Juliana",
                role: "Mãe",
                img: "https://picsum.photos/seed/juliana/100/100",
                text: "Uso em casa com meus filhos e eles amam! É uma forma maravilhosa de passar tempo de qualidade aprendendo."
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-[#FFFBF5] p-8 rounded-3xl border border-orange-50 relative">
                <p className="text-gray-600 italic mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full border-2 border-orange-200" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-xs text-orange-600 font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-orange-50 p-10 rounded-[40px]">
            {[
              { icon: <Users className="w-6 h-6" />, val: "2.500+", label: "Professores Ativos" },
              { icon: <Heart className="w-6 h-6" />, val: "98%", label: "Recomendam" },
              { icon: <Star className="w-6 h-6" />, val: "4.9/5", label: "Avaliação Média" },
              { icon: <School className="w-6 h-6" />, val: "150+", label: "Escolas Usando" }
            ].map((m, idx) => (
              <div key={idx} className="text-center">
                <div className="text-orange-600 flex justify-center mb-2">{m.icon}</div>
                <div className="text-2xl font-black text-gray-900">{m.val}</div>
                <div className="text-sm text-gray-600 font-medium">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-[#FFFBF5] px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">💰 Escolha seu pacote</h2>
            <p className="text-gray-600">Acesso imediato após a confirmação do pagamento</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Basic Package */}
            <div className="bg-white p-10 rounded-[40px] border-2 border-gray-100 flex flex-col shadow-sm">
              <h3 className="text-2xl font-bold mb-2">Pacote Básico</h3>
              <div className="mb-6">
                <span className="text-gray-400 line-through text-lg">De R$67</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-gray-900">R$10</span>
                  <span className="text-gray-500 text-sm">pagamento único</span>
                </div>
                <p className="text-green-600 font-bold text-sm mt-1">Você economiza R$57</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  150 Dinâmicas em PDF
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Acesso Vitalício
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Garantia de 7 Dias
                </li>
              </ul>

              <button className="w-full py-4 rounded-full border-2 border-orange-600 text-orange-600 font-bold hover:bg-orange-50 transition-all">
                Começar Agora
              </button>
            </div>

            {/* Premium Package */}
            <div className="bg-white p-10 rounded-[40px] border-4 border-orange-600 flex flex-col relative shadow-2xl transform md:scale-105 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">
                Mais Vendido
              </div>
              
              <h3 className="text-2xl font-bold mb-2">Pacote Premium</h3>
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 line-through text-lg">De R$97</span>
                  <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs font-bold">-72%</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-gray-900">R$27</span>
                  <span className="text-gray-500 text-sm">pagamento único</span>
                </div>
                <p className="text-green-600 font-bold text-sm mt-1">Você economiza R$70</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  150 Dinâmicas em PDF
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Acesso Vitalício
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Garantia de 7 Dias
                </li>
                <li className="pt-4 border-t border-gray-100 font-bold text-orange-600 uppercase text-xs tracking-widest">3 BÔNUS EXCLUSIVOS:</li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <Star className="w-5 h-5 text-orange-400 flex-shrink-0 fill-current" />
                  20 Atividades Lúdicas
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <Star className="w-5 h-5 text-orange-400 flex-shrink-0 fill-current" />
                  15 Desenhos para Colorir
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                  <Star className="w-5 h-5 text-orange-400 flex-shrink-0 fill-current" />
                  Manual de Inclusão
                </li>
              </ul>

              <button className="w-full py-5 rounded-full bg-orange-600 text-white font-black text-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-200">
                QUERO O PACOTE PREMIUM
              </button>
              <p className="text-center text-xs text-gray-500 mt-4 font-medium">
                +2.500 pessoas já escolheram este
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-[40px] p-12 flex flex-col md:flex-row items-center gap-10 border border-gray-100">
          <div className="w-48 h-48 flex-shrink-0 relative">
            <ShieldCheck className="w-full h-full text-orange-600" />
            <div className="absolute inset-0 bg-orange-600/10 rounded-full blur-2xl -z-10" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black mb-4">Garantia Incondicional de 7 Dias</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Se você não gostar do material, por qualquer motivo que seja, basta nos enviar um e-mail e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-bold text-gray-400 uppercase tracking-widest">
              <CheckCircle2 className="w-4 h-4" />
              Risco Zero Para Você
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#FFFBF5] px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">❓ Perguntas Frequentes</h2>
            <p className="text-gray-600">Tire suas dúvidas sobre o material</p>
          </div>

          <div className="bg-white rounded-[32px] p-8 shadow-sm border border-orange-50">
            <FAQItem 
              question="O material é físico ou digital?" 
              answer="O material é 100% digital em formato PDF. Você receberá o acesso por e-mail imediatamente após a confirmação do pagamento e poderá baixar e imprimir quantas vezes quiser."
            />
            <FAQItem 
              question="Preciso de preparo especial?" 
              answer="Não! Todas as dinâmicas são explicadas passo a passo, com lista de materiais simples (que você já tem na escola ou em casa) e objetivos pedagógicos claros."
            />
            <FAQItem 
              question="Posso usar em casa?" 
              answer="Com certeza! O material foi desenvolvido tanto para o ambiente escolar quanto para pais que desejam estimular o desenvolvimento dos filhos de forma lúdica."
            />
            <FAQItem 
              question="Tenho suporte?" 
              answer="Sim! Temos uma equipe de suporte pronta para te ajudar com qualquer dúvida técnica ou sobre o uso do material."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-orange-600 rounded-[50px] p-12 md:p-20 text-white shadow-2xl shadow-orange-200 relative overflow-hidden"
          >
            <h2 className="text-3xl md:text-5xl font-black mb-8 relative z-10">
              Pronta para transformar suas aulas?
            </h2>
            <p className="text-xl opacity-90 mb-12 relative z-10">
              Junte-se a mais de 2.500 educadores que já estão usando nossas dinâmicas.
            </p>
            <button className="bg-white text-orange-600 px-12 py-6 rounded-full font-black text-2xl hover:bg-orange-50 transition-all shadow-xl flex items-center gap-3 mx-auto relative z-10">
              TIREI MINHAS DÚVIDAS, QUERO COMPRAR!
              <ArrowRight className="w-6 h-6" />
            </button>

            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full" />
              <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white rounded-full" />
              <div className="absolute top-1/2 left-1/2 w-40 h-40 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 px-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-8">
            <BookOpen className="w-8 h-8 text-orange-600" />
          </div>
          <p className="text-gray-500 text-sm mb-4">
            Este site não é afiliado ao Facebook™ ou Google™
          </p>
          <p className="text-gray-400 text-xs">
            © 2026 - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
