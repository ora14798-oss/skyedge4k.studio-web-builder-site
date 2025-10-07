"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import { ArrowRight, Shield, TrendingUp, Smartphone, Users, CheckCircle } from "lucide-react";

interface LineShadowTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  shadowColor?: string;
  as?: React.ElementType;
}

function LineShadowText({
  children,
  shadowColor = "black",
  className,
  as: Component = "span",
  ...props
}: LineShadowTextProps) {
  const MotionComponent = motion.create(Component);
  const content = typeof children === "string" ? children : null;

  if (!content) {
    throw new Error("LineShadowText only accepts string content");
  }

  return (
    <MotionComponent
      style={{ "--shadow-color": shadowColor } as React.CSSProperties}
      className={cn(
        "relative z-0 inline-flex",
        "after:absolute after:left-[0.04em] after:top-[0.04em] after:content-[attr(data-text)]",
        "after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]",
        "after:-z-10 after:bg-[length:0.06em_0.06em] after:bg-clip-text after:text-transparent",
        "after:animate-line-shadow",
        className,
      )}
      data-text={content}
      {...props}
    >
      {content}
    </MotionComponent>
  );
}

export default function FinanceAppLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">FinanceFlow</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Take Control of Your{" "}
              <LineShadowText
                shadowColor="#3b82f6"
                className="text-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Financial Future
              </LineShadowText>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your relationship with money through intelligent budgeting, 
              smart investments, and personalized financial insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center transition-colors">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-800 transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need to{" "}
              <LineShadowText shadowColor="#10b981" className="text-emerald-400">
                Succeed Financially
              </LineShadowText>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive tools and insights to help you budget, save, invest, and grow your wealth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Shield className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Bank-Level Security</h3>
              <p className="text-slate-300">
                Your financial data is protected with enterprise-grade encryption and security protocols.
              </p>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <TrendingUp className="h-12 w-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Smart Investment Tracking</h3>
              <p className="text-slate-300">
                Monitor your portfolio performance with real-time data and intelligent analytics.
              </p>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Smartphone className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Mobile-First Design</h3>
              <p className="text-slate-300">
                Manage your finances on the go with our intuitive mobile app and responsive design.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple,{" "}
              <LineShadowText shadowColor="#f59e0b" className="text-amber-400">
                Transparent Pricing
              </LineShadowText>
            </h2>
            <p className="text-xl text-slate-300">Choose the plan that fits your financial goals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <div className="text-4xl font-bold text-blue-400 mb-4">Free</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  Basic budgeting tools
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  Expense tracking
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  Financial goal setting
                </li>
              </ul>
              <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="text-4xl font-bold text-blue-400 mb-4">$9.99<span className="text-lg text-slate-400">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  Everything in Starter
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  Investment tracking
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  Priority support
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
                Start Free Trial
              </button>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-400 mb-4">$29.99<span className="text-lg text-slate-400">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  Everything in Pro
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                  Advanced reporting
                </li>
              </ul>
              <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your{" "}
            <LineShadowText shadowColor="#8b5cf6" className="text-purple-400">
              Financial Life?
            </LineShadowText>
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of users who have already taken control of their finances with FinanceFlow.
          </p>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Users className="h-6 w-6 text-blue-400" />
            <span className="text-slate-300">Over 50,000 satisfied customers</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg text-xl font-semibold transition-colors">
            Start Your Free Trial Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <TrendingUp className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-semibold text-white">FinanceFlow</span>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-slate-400">© 2024 FinanceFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}