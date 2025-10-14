import React from 'react';
import { ArrowRight, Clock, Wrench, Sparkles } from 'lucide-react';
import Footer from '../components/Footer';

export default function ShowCase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-[#8f012d] bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our innovative solutions that transform businesses and create exceptional digital experiences. 
              From cutting-edge web applications to AI-powered platforms, we deliver excellence across all domains.
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-400 px-6 py-3 rounded-full text-lg font-semibold mb-8">
            <Clock className="w-5 h-5" />
            Coming Soon
          </div>

          {/* Main Message */}
          <h2 className="text-4xl font-bold text-white mb-6">
            This Page is Yet to be Published
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            We're working hard to bring you an amazing showcase of our latest projects. 
            Our team is putting the finishing touches on something truly spectacular.
          </p>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Interactive Portfolio</h3>
              <p className="text-gray-400 text-sm">
                Browse through our projects with advanced filtering and search capabilities
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Detailed Case Studies</h3>
              <p className="text-gray-400 text-sm">
                In-depth insights into our development process and technology stack
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Live Demos</h3>
              <p className="text-gray-400 text-sm">
                Experience our projects firsthand with interactive demonstrations
              </p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700/30 mb-12">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-300 font-medium">Development Progress</span>
              <span className="text-blue-400 font-bold">65%</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000" style={{width: '65%'}}></div>
            </div>
            <p className="text-gray-400 text-sm mt-3">
              Expected launch: Coming very soon!
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-12 border border-blue-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with cutting-edge technology and innovative solutions.
          </p>
          <a href='/'>
            <button 
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-600 hover:shadow-xl hover:scale-105">
              Get In Touch
            </button>
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}