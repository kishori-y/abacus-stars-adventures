import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';
import { Course } from '@/data/courses';
import { CreditCard, Shield, Clock, BookOpen, Star } from 'lucide-react';
import { toast } from 'sonner';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: Course;
  onPaymentSuccess: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  course,
  onPaymentSuccess,
}) => {
  const { t } = useLanguage();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSuccess();
      onClose();
      toast.success('Payment successful! Course unlocked.');
    }, 2000);
  };

  const features = [
    {
      icon: BookOpen,
      text: `${course.totalLessons} comprehensive lessons`,
    },
    {
      icon: Clock,
      text: 'Lifetime access',
    },
    {
      icon: Star,
      text: 'Interactive exercises & quizzes',
    },
    {
      icon: Shield,
      text: 'Certificate of completion',
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            Enroll in {t(course.titleKey)}
          </DialogTitle>
          <DialogDescription>
            Unlock all lessons and start your abacus journey
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Course Info */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={course.image} 
                  alt={t(course.titleKey)}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <Badge className="bg-primary text-primary-foreground mb-1">
                    {t('course.level')} {course.level}
                  </Badge>
                  <h3 className="font-semibold text-foreground">
                    {t(course.titleKey)}
                  </h3>
                </div>
              </div>
              
              <div className="text-center py-4 border-t border-primary/20">
                <div className="text-3xl font-bold text-primary mb-1">
                  {course.currency}{course.price}
                </div>
                <div className="text-sm text-muted-foreground">
                  One-time payment
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">What's included:</h4>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <Icon className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature.text}</span>
                </div>
              );
            })}
          </div>

          {/* Payment Button */}
          <Button
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full gradient-primary shadow-button transition-bounce hover:scale-105"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="h-4 w-4 mr-2" />
                Pay {course.currency}{course.price}
              </>
            )}
          </Button>

          {/* Security Note */}
          <div className="text-center text-xs text-muted-foreground">
            <Shield className="h-3 w-3 inline mr-1" />
            Secure payment powered by Stripe
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};