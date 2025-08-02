ALTER TABLE tickets
  ADD CONSTRAINT tickets_price_positive CHECK (price > 0),
  ADD CONSTRAINT tickets_ticket_count_positive CHECK (ticket_count > 0);
