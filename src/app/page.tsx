'use client'

import { useState } from 'react'
import { MapPin, Heart, Star, Search, TrendingUp, Users, Sparkles, ArrowRight, Check, X, Zap, Globe, Smartphone, Shield } from 'lucide-react'

export default function CornerLandingPage() {
  const [showDemo, setShowDemo] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {showDemo ? (
        /* DEMO INTERATIVA */
        <DemoApp onClose={() => setShowDemo(false)} />
      ) : (
        /* LANDING PAGE */
        <>
          {/* Hero Section */}
          <header className="container mx-auto px-4 py-8">
            <nav className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Corner
                </span>
              </div>
              <button
                onClick={() => setShowDemo(true)}
                className="px-6 py-2.5 bg-slate-800/50 hover:bg-slate-800 text-white rounded-xl font-semibold transition-all border border-purple-500/20"
              >
                Testar Grátis
              </button>
            </nav>

            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300 font-medium">O app que a Gen Z está usando</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Descubra lugares{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                  incríveis
                </span>
                {' '}com curadoria social
              </h1>

              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Restaurantes, bares, cafés e lojas descobertos pela comunidade. 
                Sem mapas chatos, só lugares que valem a pena.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setShowDemo(true)}
                  className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 flex items-center gap-2"
                >
                  Experimentar Demo Grátis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white rounded-2xl font-bold text-lg transition-all border border-purple-500/20">
                  Ver Preços
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-8 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Teste grátis 7 dias</span>
                </div>
              </div>
            </div>
          </header>

          {/* Preview Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-purple-500/20 overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=700&fit=crop" 
                    alt="Corner App Preview" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Por que escolher o Corner?
                </h2>
                <p className="text-xl text-slate-400">
                  A forma mais moderna de descobrir lugares
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: 'Curadoria Social',
                    description: 'Lugares recomendados por pessoas reais, não algoritmos'
                  },
                  {
                    icon: <TrendingUp className="w-8 h-8" />,
                    title: 'Sempre Atualizado',
                    description: 'Descubra os lugares em alta antes de todo mundo'
                  },
                  {
                    icon: <Star className="w-8 h-8" />,
                    title: 'Avaliações Reais',
                    description: 'Reviews honestos da comunidade Gen Z'
                  },
                  {
                    icon: <Smartphone className="w-8 h-8" />,
                    title: 'Interface Moderna',
                    description: 'Design intuitivo pensado para mobile-first'
                  },
                  {
                    icon: <Globe className="w-8 h-8" />,
                    title: 'Explore Sua Cidade',
                    description: 'Encontre joias escondidas perto de você'
                  },
                  {
                    icon: <Shield className="w-8 h-8" />,
                    title: 'Privacidade Garantida',
                    description: 'Seus dados são 100% protegidos e privados'
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-white">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Planos simples e transparentes
                </h2>
                <p className="text-xl text-slate-400">
                  Escolha o melhor para você
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Plano Gratuito */}
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                  <h3 className="text-2xl font-bold text-white mb-2">Gratuito</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">R$ 0</span>
                    <span className="text-slate-400">/mês</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Acesso a lugares básicos',
                      'Feed social limitado',
                      'Salvar até 10 lugares',
                      'Anúncios ocasionais'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-slate-300">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setShowDemo(true)}
                    className="w-full py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold transition-all"
                  >
                    Começar Grátis
                  </button>
                </div>

                {/* Plano Premium */}
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-500 relative overflow-hidden">
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                    <span className="text-xs font-bold text-white flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      POPULAR
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-white">R$ 19,90</span>
                    <span className="text-slate-400">/mês</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Acesso ilimitado a todos os lugares',
                      'Feed social completo',
                      'Salvar lugares ilimitados',
                      'Sem anúncios',
                      'Filtros avançados',
                      'Notificações de novos lugares',
                      'Badge exclusivo no perfil',
                      'Suporte prioritário'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-white">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setShowDemo(true)}
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/50"
                  >
                    Começar Teste Grátis
                  </button>
                  <p className="text-center text-sm text-slate-400 mt-3">
                    7 dias grátis • Cancele quando quiser
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/30">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Pronto para descobrir lugares incríveis?
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  Junte-se a milhares de pessoas que já estão explorando com o Corner
                </p>
                <button
                  onClick={() => setShowDemo(true)}
                  className="group px-10 py-5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-2xl font-bold text-xl transition-all hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 flex items-center gap-3 mx-auto"
                >
                  Experimentar Demo Grátis Agora
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="container mx-auto px-4 py-8 border-t border-purple-500/20">
            <div className="text-center text-slate-400 text-sm">
              <p>© 2024 Corner. Todos os direitos reservados.</p>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}

/* COMPONENTE DE DEMO INTERATIVA */
function DemoApp({ onClose }: { onClose: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [savedPlaces, setSavedPlaces] = useState<Set<string>>(new Set())

  const places = [
    {
      id: '1',
      name: 'Café Modernista',
      category: 'cafe',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop',
      rating: 4.8,
      saves: 1234,
      distance: '0.5 km',
      tags: ['wifi', 'instagramável']
    },
    {
      id: '2',
      name: 'Bar Secreto',
      category: 'bar',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop',
      rating: 4.9,
      saves: 2156,
      distance: '1.2 km',
      tags: ['drinks', 'música ao vivo']
    },
    {
      id: '3',
      name: 'Ramen House',
      category: 'restaurante',
      image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=300&fit=crop',
      rating: 4.7,
      saves: 1567,
      distance: '1.5 km',
      tags: ['japonês', 'popular']
    }
  ]

  const toggleSave = (id: string) => {
    setSavedPlaces(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const filteredPlaces = selectedCategory === 'all' 
    ? places 
    : places.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Header Demo */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Corner Demo
                </h1>
                <p className="text-xs text-slate-400">Modo de teste</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-800 rounded-xl transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar lugares..."
              className="w-full bg-slate-800/50 border border-purple-500/20 text-white pl-12 pr-4 py-3 rounded-2xl focus:outline-none focus:border-purple-500/50"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {['all', 'restaurante', 'bar', 'cafe'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {cat === 'all' ? 'Todos' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Places Grid */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPlaces.map(place => (
            <div
              key={place.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all"
            >
              <div className="relative h-48">
                <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
                <button
                  onClick={() => toggleSave(place.id)}
                  className="absolute top-3 right-3 p-2 bg-slate-900/80 backdrop-blur-sm rounded-full hover:scale-110 transition-transform"
                >
                  <Heart
                    className={`w-5 h-5 ${savedPlaces.has(place.id) ? 'fill-pink-500 text-pink-500' : 'text-white'}`}
                  />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white mb-2">{place.name}</h3>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-white">{place.rating}</span>
                  </div>
                  <span className="text-xs text-purple-400">{place.distance}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {place.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-lg"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA dentro da demo */}
        <div className="mt-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Gostou da demo?
          </h3>
          <p className="text-slate-300 mb-6">
            Desbloqueie todos os recursos com o plano Premium
          </p>
          <button
            onClick={onClose}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl font-semibold transition-all hover:shadow-lg"
          >
            Ver Planos Completos
          </button>
        </div>
      </main>

      <div className="h-20" />
    </div>
  )
}
