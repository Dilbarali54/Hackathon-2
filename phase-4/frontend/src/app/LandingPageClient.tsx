'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function LandingPageClient() {
  return (
    <div className="min-h-screen bg-[#0B0B12] text-[#EDEEF3] relative overflow-hidden">
      {/* Subtle purple grid background */}
      <div 
        className="absolute inset-0 bg-repeat opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(167, 139, 250, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(167, 139, 250, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          className="py-6 flex items-center justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-[#A78BFA]">
            ✨ AI Todo App
          </h1>
          <div className="flex items-center gap-3">
            <Link href="/signin">
              <button className="px-4 py-2 text-[#A78BFA] border border-[#A78BFA] rounded-lg hover:bg-[#A78BFA]/10 transition-all duration-300">
                Sign In
              </button>
            </Link>
            <Link href="/signup">
              <button className="px-4 py-2 bg-transparent text-[#A78BFA] border border-[#A78BFA] rounded-lg hover:bg-[#A78BFA]/10 transition-all duration-300">
                Sign Up
              </button>
            </Link>
          </div>
        </motion.header>

        {/* Hero section */}
        <motion.div
          className="py-20 md:py-32 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD]">
              Smarter Tasks.
            </span>
            <br />
            <span className="text-white">Powered by AI.</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            An AI-powered todo app where you can create tasks manually or by chatting with an intelligent assistant.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link href="/signup">
              <button className="px-6 py-3 bg-transparent text-[#A78BFA] border border-[#A78BFA] rounded-lg hover:bg-[#A78BFA]/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(167,139,250,0.3)]">
                Get Started
              </button>
            </Link>
            <Link href="#features">
              <button className="px-6 py-3 text-[#A78BFA] underline hover:no-underline transition-all duration-300">
                Learn More
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.section
          className="py-16"
          id="features"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Powerful Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-transparent rounded-xl p-6 border-2 border-[#A78BFA] hover:border-[#C4B5FD] transition-all duration-300 hover:shadow-[0_0_20px_rgba(167,139,250,0.2)]"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-[#A78BFA]">
                <svg
                  className="w-6 h-6 text-[#A78BFA]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                AI Powered Todo ChatBot
              </h3>
              <p className="text-gray-300">
                Create tasks by simply chatting with AI
              </p>
            </motion.div>

            <motion.div
              className="bg-transparent rounded-xl p-6 border-2 border-[#A78BFA] hover:border-[#C4B5FD] transition-all duration-300 hover:shadow-[0_0_20px_rgba(167,139,250,0.2)]"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-[#A78BFA]">
                <svg
                  className="w-6 h-6 text-[#A78BFA]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Manual Task Management
              </h3>
              <p className="text-gray-300">
                Add, update, complete, and delete tasks easily
              </p>
            </motion.div>

            <motion.div
              className="bg-transparent rounded-xl p-6 border-2 border-[#A78BFA] hover:border-[#C4B5FD] transition-all duration-300 hover:shadow-[0_0_20px_rgba(167,139,250,0.2)]"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-[#A78BFA]">
                <svg
                  className="w-6 h-6 text-[#A78BFA]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Smart Prioritization
              </h3>
              <p className="text-gray-300">
                AI helps you organize tasks by importance
              </p>
            </motion.div>

            <motion.div
              className="bg-transparent rounded-xl p-6 border-2 border-[#A78BFA] hover:border-[#C4B5FD] transition-all duration-300 hover:shadow-[0_0_20px_rgba(167,139,250,0.2)]"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-[#A78BFA]">
                <svg
                  className="w-6 h-6 text-[#A78BFA]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Clean & Distraction-Free UI
              </h3>
              <p className="text-gray-300">
                Focus on work without clutter
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Interface Preview */}
        <motion.section
          className="py-16"
          id="preview"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Task Management Interface
          </motion.h2>

          <div className="max-w-4xl mx-auto bg-[#0F1020] rounded-xl p-6 border-2 border-[#A78BFA]">
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-[#1A1B2E] rounded-lg border border-[#A78BFA]/30">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 mr-3 text-[#A78BFA] border-[#A78BFA] rounded focus:ring-[#A78BFA] bg-transparent" 
                  defaultChecked={false}
                  readOnly
                />
                <span className="text-white">Complete the project proposal</span>
              </div>
              
              <div className="flex items-center p-3 bg-[#1A1B2E] rounded-lg border border-[#A78BFA]/30">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 mr-3 text-[#A78BFA] border-[#A78BFA] rounded focus:ring-[#A78BFA] bg-transparent" 
                  defaultChecked={false}
                  readOnly
                />
                <span className="text-white">Schedule team meeting</span>
              </div>
              
              <div className="flex items-center p-3 bg-[#1A1B2E] rounded-lg border border-[#A78BFA]/30 opacity-60">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 mr-3 text-[#A78BFA] border-[#A78BFA] rounded focus:ring-[#A78BFA] bg-transparent" 
                  defaultChecked
                  readOnly
                />
                <span className="text-[#A78BFA] line-through">Review quarterly reports</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-[#1A1B2E] rounded-lg border border-[#A78BFA]/30">
              <div className="flex items-start mb-3">
                <div className="w-8 h-8 rounded-full bg-[#A78BFA]/20 flex items-center justify-center mr-3">
                  <span className="text-[#A78BFA] text-xs">AI</span>
                </div>
                <div className="bg-[#2D2F4A] rounded-lg p-3 border border-[#A78BFA]/30">
                  <p className="text-white">I've analyzed your schedule and suggest prioritizing the project proposal first.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#C4B5FD]/20 flex items-center justify-center mr-3">
                  <span className="text-[#C4B5FD] text-xs">U</span>
                </div>
                <div className="bg-[#2D2F4A] rounded-lg p-3 border border-[#A78BFA]/30">
                  <p className="text-white">Thanks for the suggestion! I'll get started on that right away.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          className="py-16"
          id="how-it-works"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>
          
          <div className="max-w-3xl mx-auto space-y-12">
            <motion.div 
              className="flex items-start"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-full border-2 border-[#A78BFA] flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-[#A78BFA] font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Create tasks manually or ask the AI</h3>
                <p className="text-gray-300">
                  Add tasks directly or simply tell our AI assistant what you need to do and it will create tasks for you.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-full border-2 border-[#A78BFA] flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-[#A78BFA] font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Update, complete, or delete tasks anytime</h3>
                <p className="text-gray-300">
                  Manage your tasks with simple controls to keep your list up to date.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              variants={fadeInUp}
            >
              <div className="w-12 h-12 rounded-full border-2 border-[#A78BFA] flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-[#A78BFA] font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Let AI help you stay productive every day</h3>
                <p className="text-gray-300">
                  Our AI assistant provides smart suggestions and helps you prioritize your tasks.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="py-20 mb-16 rounded-3xl border border-[#A78BFA]/30"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center max-w-3xl mx-auto px-4">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Turn Your Daily Plans Into Action
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link href="/signup">
                <button className="px-8 py-4 text-lg bg-transparent text-[#A78BFA] border-2 border-[#A78BFA] rounded-lg hover:bg-[#A78BFA]/10 transition-all duration-300 hover:shadow-[0_0_25px_rgba(167,139,250,0.3)]">
                  Start Using AI Todo App
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-gray-500 border-t border-[#A78BFA]/30">
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-[#A78BFA] mb-2">
              ✨ AI Todo App
            </h3>
            <p className="text-gray-400">AI-Powered Task Management</p>
          </motion.div>
          <motion.div
            className="flex justify-center space-x-6 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a href="#" className="text-gray-400 hover:text-[#A78BFA] transition-colors">
              Docs
            </a>
            <a href="#" className="text-gray-400 hover:text-[#A78BFA] transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-[#A78BFA] transition-colors">
              Contact
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            &copy; 2026 AI Todo App. All rights reserved.
          </motion.p>
        </footer>
      </div>
    </div>
  );
}