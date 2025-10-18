import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ReservationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ReservationModal = ({ open, onOpenChange }: ReservationModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    requests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Store in localStorage
    const reservations = JSON.parse(localStorage.getItem("reservations") || "[]");
    reservations.push({
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("reservations", JSON.stringify(reservations));

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Reservation Request Submitted!",
        description: "We'll contact you shortly to confirm your reservation.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        guests: "",
        date: "",
        time: "",
        requests: "",
      });
      onOpenChange(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair">Make a Reservation</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="guests">Guests *</Label>
              <Input
                id="guests"
                name="guests"
                type="number"
                min="1"
                max="20"
                value={formData.guests}
                onChange={handleChange}
                required
                placeholder="2"
              />
            </div>
            <div>
              <Label htmlFor="date">Date *</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="time">Time *</Label>
            <Input
              id="time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="requests">Special Requests</Label>
            <Textarea
              id="requests"
              name="requests"
              value={formData.requests}
              onChange={handleChange}
              placeholder="Any dietary restrictions or special occasions..."
              rows={3}
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Reservation"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationModal;
