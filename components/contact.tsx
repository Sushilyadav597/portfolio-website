"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    alert("Message sent! Thank you for reaching out.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-2 text-center">Get In Touch</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-4" />
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my
          best to get back to you!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Contact Information</h3>
            <div className="space-y-4">
              <a
                href="mailto:sushilyadav@email.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground">sushilyadav@email.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground">(+91) 8052192614</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Gorakhpur, UP (273157)</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-card border-border"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-card border-border"
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="bg-card border-border resize-none"
            />
            <Button type="submit" className="w-full">
              Send Message <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
