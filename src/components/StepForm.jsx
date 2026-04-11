import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const StepForm = ({ steps, currentStep, onNext, onPrev, onSubmit, theme = 'teal' }) => {
  const totalSteps = steps.length
  const progress = ((currentStep + 1) / totalSteps) * 100

  const themeColors = {
    teal: {
      primary: 'from-teal-500 to-emerald-500',
      bg: 'bg-teal-500',
      text: 'text-teal-600',
    },
    amber: {
      primary: 'from-amber-500 to-yellow-500',
      bg: 'bg-amber-500',
      text: 'text-amber-600',
    },
  }

  const colors = themeColors[theme]

  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-medium text-gray-500">
            Step {currentStep + 1} of {totalSteps}
          </span>
          <span className="text-xs font-medium text-gray-500">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${colors.primary}`}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          {steps[currentStep]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
        <button
          type="button"
          onClick={onPrev}
          disabled={currentStep === 0}
          className="px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          ← Back
        </button>

        {currentStep < totalSteps - 1 ? (
          <button
            type="button"
            onClick={onNext}
            className={`px-8 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r ${colors.primary} shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200`}
          >
            Continue →
          </button>
        ) : (
          <button
            type="button"
            onClick={onSubmit}
            className={`px-8 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r ${colors.primary} shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200`}
          >
            Complete Setup →
          </button>
        )}
      </div>
    </div>
  )
}

export default StepForm
