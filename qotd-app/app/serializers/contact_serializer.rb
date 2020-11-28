class ContactSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :phone_number, :permission_requested, :permission_granted
end
